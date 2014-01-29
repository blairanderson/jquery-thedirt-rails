# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "jquery/thedirt/rails/version"

Gem::Specification.new do |s|
  s.name = "jquery-thedirt-rails"
  s.version = Jquery::Thedirt::Rails::VERSION
  s.authors = ["Blair Anderson"]
  s.email = ["Blair81@gmail.com"]
  s.homepage = "https://github.com/blairanderson/jquery-thedirt-rails"
  s.summary = %q{jquery thedirt for rails}
  s.description = %q{}

  s.files = `git ls-files`.split("\n")
  s.files = Dir["{app,lib,vendor}/**/*"]
  s.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  s.add_dependency "jquery-rails"
end


