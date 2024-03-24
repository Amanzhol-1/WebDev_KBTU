def count(a, b):
    s = ""
    for i in range(a, b+1):
        if i % 2 == 0: s += str(i) + " "
    return s

print(count(int(input()), int(input())))