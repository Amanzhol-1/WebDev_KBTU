def split_and_join(line): 
    line2="" 
    for i in line: 
        if i==' ': 
            line2+="-" 
        else: 
            line2+=i 
    return line2 

if __name__ == '__main__':
    line = input()
    result = split_and_join(line)
    print(result)
