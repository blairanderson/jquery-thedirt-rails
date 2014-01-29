# Important

The current gem is released without updated plugins. If you encounter any errors, please fork the repository, update the plugin files and send a pull-request.

# jquery-thedirt-rails

## General Installation

1. Add to your Gemfile:

        gem 'jquery-thedirt-rails', git: 'git://github.com/blairanderson/jquery-thedirt-rails.git'

1. Install the gem:

        bundle install

1. Add the JavaScript to `application.js`:
        //= require jquery
        //= require thedirt/jquery.theDirt

1. Initialize your thedirt:

        ```html
          <form>
            <textarea name="job_description"></textarea>
            <input type="submit" value="Submit"/>
          </form>

          <script type="text/javascript">
            $(function(){
              $('form').TheDirt()
            })
          </script>
        ```