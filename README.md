### Fabby usage
#### Allow permissions :
```bash
chmod +x ./fabby.js
```
#### Write this command and let the magic happen :
```bash
./fabby.js <function-name>
```
#### Fabby write a typescript file and edits the config.json :

```bash
src/functions/
├──  simpleExample.ts
└── config.json
```
```json
[
  {
    "name": "simpleExample",
    "private": false,
    "runAsSystem": true
  }
]
```
