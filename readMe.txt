Author: Maramkhah, Shayon
Description:
  Node.js, express and handlebars.

  File structure:
    public -> css
    views => layouts -> index.hbs
          => partials -> hatedChamps
                      -> lovedChamps
    main.hbs
    planB.hbs

    Journal:
      Handlebars templating engine used from the index html file.
     "Body" is used to render html from main.hbs. Partials are used for small html.
     Content can dynamically be assigned from forms or databases using various routes.
     Express can create routes which take views as parameters. API first web design.
     Single page web application.
