import random
def guess():
    answer = random.randint(1, 200)
    userguess = 0
    while answer != userguess:
        try:
            userguess = int(input("GUESS A NUMBER (1-200):   "))
        except ValueError:
            print("NO I SAID A NUMBER")
            continue
        if userguess == answer:
            print("YAY YOU DID IT")
            break
        elif userguess > answer:
            print("whoops went a over try again")
        else:
            #userguess < answer:
            print("Oh no you're under try again")



guess()
