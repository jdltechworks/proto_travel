<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body>
        <div id="main"></div>
        <script src={{mix('js/pace.min.js')}}></script>
        <script src={{mix('js/app.js')}}></script>
        @if(isset($collection))
            <script>
                const props = {
                  collection: {!!$collection!!},
                  csrf_token: "{{csrf_token()}}",
                  url: "{{url('/')}}"
                }
                app(props, 'main')
            </script>
        @else
          <script>
            const props = {
              csrf_token: "{{csrf_token()}}"
            }
            app(props, 'main')
          </script>
        @endif
    </body>
</html>
