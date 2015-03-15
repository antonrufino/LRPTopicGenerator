import random

templates = [
    ["Analysis of the effects of ", " on ", ""],
    ["The Pros and Cons of replacing ", " with ", ""],
    ["Why the Philippines should ban ", " and ", ""],
    ["Why the Philippines should legalize ", " and ", ""],
    ["Should the government pay attention to ", " instead of ", ""],
    ["Solving the ", " problem using ", ", ", " and deterministic numerical methods"],
    ["Edi Wow: An analysis of elitism in the academic fields of ", " and ", ""],
    ["A mathematical analysis of the effects of ", " on ", ""],
    ["Constructing computational models of ", " using ", ""],
    ["An analysis of ", ""],
    ["On the benefits of ", ""]
]

topics = ["PNoy", "Vice Ganda", "That Thing Called Tadhana", "Fifty Shades of Gray", 
    "piracy", "hugot", "LRP", "CMSC 56", "CMSC 11", "MATH 17", "my hopes and dreams", 
    "communism", "\"fuck this shit\""]
     
template = random.choice(templates)
topic = ""
for i in template[:(len(template)-1)]:
    topic += (i + random.choice(topics))

topic += template[len(template) - 1] 

print(topic)   
