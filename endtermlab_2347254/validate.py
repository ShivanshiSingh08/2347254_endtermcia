from lxml import etree


schema = etree.XMLSchema(etree.parse("canine.xsd"))


xml_data = etree.parse("canine.xml")
if schema.validate(xml_data):
    print("Validation successful")
else:
    print("Validation failed")
    for error in schema.error_log:
        print(error)
