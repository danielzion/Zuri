# find_anagrams function declaration
def find_anagrams(first, second):
    # the user input is stripped off of whitespaces and then sorted
    a = sorted(first.replace(' ',''))
    b = sorted(second.replace(' ',''))
    print(a)
    print(b)
    if a == b:
        print('True')
    else:
        print('False')

if __name__ == "__main__":
    # user inputs words
    first = input('Enter the first word: \n')
    second = input('Enter the second word: \n')
    # find_anagrams function call
    find_anagrams(first, second)
