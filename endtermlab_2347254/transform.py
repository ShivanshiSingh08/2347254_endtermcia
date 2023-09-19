from lxml import etree


xslt = etree.parse("canine.xslt")
transform = etree.XSLT(xslt)


xml_data = etree.parse("canine.xml")


result = transform(xml_data)

with open("output.html", "wb") as output_file:
    output_file.write(etree.tostring(result, pretty_print=True))
