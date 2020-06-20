### Testrepo for SevDesk Templates

## Disclamer

This is a repo for working with sevdesk templates.

It is unofficial and not very stable. This is just a try to make the
customization work easyer.

## Contents of the Repo

### extract_interpolations.js

With this file one can extract all params in brackets like
```{{data.cusomte.name}}``` to the corresponding JSON File. (data.json)

### interpolate_docs.js

This file will replace all occurences of interpolations with the data specified
in `data.json`. Also all interpolations starting with #, / or ^ will be removed.

#### For example: 
```html
<p>{{# i18n }}Page{{/ i18n}}</p> 
```

will become

```html
<p>Page</p>
```

# How to use

* Obtain your own Template from SevDesk
* run extract_interpolations.js
* edit values in data.json
* run interpolate_docs.js
* open newly created index.html

## License: 
[MIT LICENSE](./LICENSE)