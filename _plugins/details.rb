# Collapsible reveal rows.
# Originally from http://movb.de/jekyll-details-support.html, extended so a
# closed row can carry the three parts the design uses:
#
#   {% details Title | Subtitle line | META TAG %}
#
# Title is required; Subtitle and META are optional. Both stay visible while the
# row is closed — that is the point of the row, since the subtitle is what tells
# a reader whether opening it is worth it. The single-argument form still works:
#
#   {% details Title %}
#
module Jekyll
  module Tags
    class DetailsTag < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super
        @markup = markup
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)

        title, subtitle, meta = @markup.strip.split("|", 3).map { |p| p.to_s.strip }

        summary = +"<span class=\"reveal__text\">"
        summary << "<span class=\"reveal__title\">#{inline(converter, title)}</span>"
        summary << "<span class=\"reveal__sub\">#{inline(converter, subtitle)}</span>" unless subtitle.to_s.empty?
        summary << "</span>"
        summary << "<span class=\"reveal__meta\">#{inline(converter, meta)}</span>" unless meta.to_s.empty?

        body = converter.convert(super(context))
        "<details><summary>#{summary}</summary>#{body}</details>"
      end

      private

      # Markdown-convert a fragment and unwrap the paragraph it comes back in.
      def inline(converter, text)
        converter.convert(text.to_s).gsub(%r{</?p[^>]*>}, "").chomp
      end
    end
  end
end

Liquid::Template.register_tag("details", Jekyll::Tags::DetailsTag)
