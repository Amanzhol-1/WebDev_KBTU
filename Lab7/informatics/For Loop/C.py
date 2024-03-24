def full(a, b):
    s = ""
    for i in range(a, b + 1):
        if (i**0.5).is_integer():
            s += str(i) + " "
    return s

print(full(int(input()), int(input())))