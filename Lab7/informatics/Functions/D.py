def Election(a, b, c):
    s = [a, b, c]
    t = s.count(True)
    f = s.count(False)
    if t > f: return 1
    return 0

a, b, c = [bool(int(i)) for i in input().split()]
print(Election(a, b, c))