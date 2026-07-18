import re

with open('ali-hamza-portfolio.html', 'r') as f:
    html = f.read()

start = html.find('<style>') + 7
end = html.find('</style>')
css = html[start:end]

# Extract all class names from the CSS
# A class selector starts with a dot, followed by letters/hyphens/numbers
class_matches = re.findall(r'\.([a-zA-Z_-][a-zA-Z0-9_-]*)', css)
unique_classes = set(class_matches)

# Remove things that shouldn't be prefixed
ignore_list = {'dark', 'light', 'sr-only'}
unique_classes = {c for c in unique_classes if c not in ignore_list}

# Sort descending by length so '.hero-draft' replaces before '.hero'
sorted_classes = sorted(list(unique_classes), key=len, reverse=True)

for cls in sorted_classes:
    # Only replace if it's actually a class selector (preceded by a dot)
    # We use lookbehind to ensure we match the dot, but we don't want to replace the dot itself with duplicate dots
    # So we replace \.cls with \.px-cls
    pattern = r'\.' + re.escape(cls) + r'(?![a-zA-Z0-9_-])'
    css = re.sub(pattern, f'.px-{cls}', css)

with open('src/app/globals.css', 'a') as f:
    f.write("\n/* --- CUSTOM PREFIXED PORTFOLIO STYLES --- */\n")
    f.write(css)

print("Added prefixed CSS to globals.css")
