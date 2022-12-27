### Fabby usage
#### Allow permissions :
```bash
chmod +x ./fabby    
```
#### Write this command and let the magic happen :
```ts
./fabby.js <function-name>
```
#### Fabby write a typescript file and editing the config.json :

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
