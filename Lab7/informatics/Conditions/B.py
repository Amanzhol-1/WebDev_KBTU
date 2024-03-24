def leap_year(a):
    if (a % 4 == 0 and a % 100 != 0) or a % 400 == 0:
        return "YES"
    else:
        return "NO"
    
print(leap_year(int(input())))