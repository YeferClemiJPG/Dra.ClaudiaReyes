"""Read-only Context7 MCP check; no API keys or project data are sent."""
import json
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parent
ENDPOINT = 'https://mcp.context7.com/mcp'

def call(request_id, method, params, destination):
    payload = {'jsonrpc': '2.0', 'id': request_id, 'method': method, 'params': params}
    request = Request(ENDPOINT, data=json.dumps(payload).encode(), headers={
        'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream'
    })
    with urlopen(request, timeout=40) as response:
        raw = response.read().decode()
    data = json.loads(next(line[6:] for line in raw.splitlines() if line.startswith('data: '))) if raw.startswith('event:') else json.loads(raw)
    (ROOT / destination).write_text(json.dumps(data, ensure_ascii=False, indent=2))
    if 'error' in data or data.get('result', {}).get('isError'):
        raise RuntimeError(f'{method}: {data}')
    print(f'{method}: OK -> {destination}')
    return data

if __name__ == '__main__':
    call(1, 'initialize', {
        'protocolVersion': '2024-11-05', 'capabilities': {},
        'clientInfo': {'name': 'clemi-integration-check', 'version': '1.0.0'}
    }, 'context7-initialize.json')
    call(2, 'tools/list', {}, 'context7-tools.json')
    result = call(3, 'tools/call', {'name': 'resolve-library-id', 'arguments': {
        'libraryName': 'motion',
        'query': 'Vanilla JavaScript motion animate inView and stagger, no React'
    }}, 'context7-resolve-motion.json')
    if '/websites/motion_dev' not in json.dumps(result):
        raise RuntimeError('Motion documentation ID changed; inspect the returned libraries before proceeding.')
    call(4, 'tools/call', {'name': 'query-docs', 'arguments': {
        'libraryId': '/websites/motion_dev',
        'query': 'Vanilla JavaScript animate elements on entry with inView and stagger from the motion npm package.'
    }}, 'context7-motion-docs.json')
