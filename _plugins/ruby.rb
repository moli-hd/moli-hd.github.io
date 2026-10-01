module Jekyll
  class RubyTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @text, @reading = markup.strip.split(/\s+/, 2)
    end

    def render(context)
      return "" unless @text && @reading

      "<ruby>#{@text}<rp>(</rp><rt>#{@reading}</rt><rp>)</rp></ruby>"
    end
  end
end

Liquid::Template.register_tag('ruby', Jekyll::RubyTag)