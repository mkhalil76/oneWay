<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>CoreUI - Vue Open Source Bootstrap Admin Template</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118965717-3"></script>
    <link href="{{ asset('css/app.css') }}">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script src="{{ asset('js/app.js') }}"></script>
  </body>
</html>
