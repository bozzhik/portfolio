# py src/utils/generate_safelist.py

import requests
import os

url = "https://my0gy5hm.api.sanity.io/v2022-03-07/data/query/production?query=*"
css_file = 'src/assets/stylesheets/safelist-colors.css'

os.makedirs(os.path.dirname(css_file), exist_ok=True)

response = requests.get(url)

if response.status_code == 200:
    data = response.json().get('result', [])
    
    css_content = "/* Auto-generated color variables and utilities by generate_safelist.py */\n\n:root {\n"
    data_selectors = ""
    variable_count = 0
    
    for item in data:
        if 'color' in item and 'rgb' in item['color'] and 'slug' in item:
            rgb = item['color']['rgb']
            slug = item['slug']['current']
            
            css_content += f"  --{slug}: {rgb['r']}, {rgb['g']}, {rgb['b']}, {rgb.get('a', 0.4)};\n"
            variable_count += 1
            
            data_selectors += f"[data-product='{slug}'] section {{\n"
            data_selectors += f"  background: linear-gradient(to bottom, #33333350 0%, #33333350 50%, #10101050 100%);\n"
            data_selectors += f"  transition: background 0.3s;\n"
            data_selectors += "}\n\n"
            
            data_selectors += f"[data-product='{slug}']:hover section {{\n"
            data_selectors += f"  background: linear-gradient(to bottom, rgba(var(--{slug})) 0%, #33333350 50%, #10101050 100%);\n"
            data_selectors += "}\n\n"
    
    css_content += "}\n\n" + data_selectors
    
    with open(css_file, 'w') as file:
        file.write(css_content)

    print(f"CSS file was updated: {css_file}")
    print(f"Total variables created: {variable_count}")
    print()

else:
    print(f"Error: {response.status_code}: {response.text}")
