# Repro-Hang-Optimizer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

# Initial condition

1. Basic ng new app
2. Added a big TS file (a generated parser) placed at `/src/app/parser.ts` and called from **app.component**.

# Repro steps

The project is valid TS. This works:

```bash
tsc
ng serve
ng build
ng build -env prod
```

This does not work:
```bash
ng build -prod
```
 Hangs forever.

Disabling the build-optimizer works again.
```bash
ng build -prod --build-optimizer=false
```
