class FullInitGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  desc "This generator creates an a lot of things."

  def full_init
    #
    #RSpec
    #
   generate 'rspec:install'

   append_to_file '.rspec', '--format documentation'

   inject_into_file './spec/spec_helper.rb', after: "RSpec.configure do |config|\n" do
  "  config.include FactoryGirl::Syntax::Methods\n"
   end

   run 'mkdir ./spec/factories/'

   #
   #devise
   #

   generate 'devise:install'
   generate 'devise:views'
   generate 'devise user username:string:uniq'

   inject_into_file './config/routes.rb', after: "::Application.routes.draw do" do
  "  root :to => 'home#index'\n"
   end
   
   rake 'db:migrate'

   #
   # backbone
   #

   generate 'backbone:install --javascript'

   git :init
   append_to_file '.gitignore', '.DS_Store\n'
   append_file '.gitignore', '.env\n'
   git add: "-A"
   git commit: %Q{ -m 'Initial commit' }
   end
end
