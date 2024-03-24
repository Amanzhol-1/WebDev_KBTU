def Xor(a, b):
    if a and b:
        return 0
    if a or b:
        return 1
    return 0

a, b = [int(i) for i in input().split()]
print(Xor(a, b))