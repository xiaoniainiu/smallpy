#!/usr/bin/env python
#coding=utf-8
from jinja2 import Environment,PackageLoader,FileSystemLoader,Template;

import os;

templatePath = os.getcwd();

# print templatePath;

env = Environment(loader=FileSystemLoader('/var/www/cgi-bin/smallpy/Views'));

template = env.get_template('mytemplate.html');

print template.render(the='variables', go='here');

# template = Template('Hello {{ name }}!')

# print template.render(name='John Doe')

print templatePath;