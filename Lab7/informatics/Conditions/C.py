def sym(a, b):
    if a == 1 and b == 1:
        return "YES"
    if a != 1 and b != 1:
        return "YES"
    return "NO"

print(sym(int(input()), int(input())))