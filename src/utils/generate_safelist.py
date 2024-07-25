# py src/utils/generate_safelist.py

import requests
import re

url = "https://my0gy5hm.api.sanity.io/v2022-03-07/data/query/production?query=*"
config_file='tailwind.config.ts'

response = requests.get(url)

if response.status_code == 200:
    data = response.json().get('result', [])
    
    formatted_colors = [
        f"{item['color']['rgb']['r']}_{item['color']['rgb']['g']}_{item['color']['rgb']['b']}/{item['color']['rgb']['a']}"
        for item in data
        if 'color' in item and 'rgb' in item['color']
    ]
    
    safelist_block = "    safelist: [\n" + "".join(
        f"      'hover:from-[rgba({color})]',\n" for color in formatted_colors
    ) + "    ],\n"
    
    with open(config_file, 'r') as file:
        file_content = file.read()

    safelist_pattern = re.compile(r"\s*safelist:\s*\[[\s\S]*?\],\s*")
    
    if safelist_pattern.search(file_content):
        file_content = safelist_pattern.sub(safelist_block, file_content)
    else:
        screen_pos = file_content.find('plugins:')
        if screen_pos != -1:
            file_content = file_content[:screen_pos] + safelist_block + file_content[screen_pos:]
    
    with open(config_file, 'w') as file:
        file.write(file_content)

    print(f"Tailwind config was updated: {config_file}")

else:
    print(f"Error: {response.status_code}: {response.text}")
