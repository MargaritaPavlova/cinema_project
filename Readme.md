# Учебный проект Примакова Александра.

[Ссылка](https://www.figma.com/file/IAuzewD0Wz9Pn3SN0ePixE/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-stc-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80?node-id=0%3A1) на макет.

## Установка зависимостей.

Запустите в терминале команду для установки зависимостей проекта

```shell
npm install @babel/core @babel/cli @babel/preset-env @babel/polyfill
```

## Запуск Babel.

```shell
npx babel js -d target
```

## Запуск babel с авотматической пересборкой.

Для работы над проектом необходимо запустить транспиляцию javascript

```shell
npx babel js -d target --watch --source-maps
```
