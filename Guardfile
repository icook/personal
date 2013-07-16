# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload', :apply_js_live => true, :appy_css_live => true do
  watch(%r{static/js/.+\.(js)$})
  watch(%r{static/css/.+\.(css)$})
  watch(%r{^.+\.(html)$})
end

#guard 'less', :output => 'static/css' do
#  watch(%r{^.+\.less$})
#end

guard 'coffeescript', :input => '', :output => 'static/js' do
  watch(%r{^.+\.coffee$})
end

guard 'compass' do
  watch(%r{^.+\.sass$})
end
