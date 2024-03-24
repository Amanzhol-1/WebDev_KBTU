def prime(n):
    if n == 2:
        return 'prime'
    if n % 2 == 0:
        return 'composite'
    i = 3
    while i * i <= n:
        if n % i == 0:
            return 'composite'
        i += 2
    return 'prime'

print(prime(int(input())))