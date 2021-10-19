# calcola-orario-pa

Simple page with react components that helps calculate time with stamping card and smart working.
In the new version (1.2) use cookie for support.

Note: cookies are stored locally and are not used for any purpose other than what is essential for the app to work


## Production

this app is designed and hosted on [heroku](https://www.heroku.com/)

You can find it here: [https://calcolo-orario-pa.herokuapp.com/](https://calcolo-orario-pa.herokuapp.com/)


## Release

This section is a simple reminder for releases on heroku.
It assumes that an account has been created and is properly configured.

1) build: `npm run build`
2) commit su git (branch master)
3) push dist folder into heroku:

```
git subtree push --prefix dist heroku master 
```

TIPS: the dist folder has been deliberately placed within github and through the appropriate command will be sent to heroku for release