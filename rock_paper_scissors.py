import random

# !/usr/bin/env python3

"""This program plays a game of Rock, Paper, Scissors between two Players,
and reports both Player's scores."""

moves = ['r', 'p', 's']
wins = {'player_one_score': 0, 'player_two_score': 0}



def play_game():
    player_choice = validate_input(
            "Rock, Paper, Scissors? > \n", moves)
    random_choice = random.choice(moves)
    play_response(player_choice, random_choice)
    score(player_choice, random_choice)

def validate_input(prompt, options):
    while True:
        option = input(prompt).lower()
        if option in options:
            return option
        elif option == 'quit':
            quit_game()
        else:
            print('Error!!! Invalid Input')

# Validates the winner
def beats(one, two):
    return ((one == 'r' and two == 's') or
            (one == 's' and two == 'p') or
            (one == 'p' and two == 'r'))


# Validate the winner
def score(move1, move2):
    if beats(move1, move2):
        wins['player_one_score'] += 1
        print(f'** YOU WON **')
        exit(0)


    elif beats(move2, move1):
        wins['player_two_score'] += 1
        print(f"** CPU WON **")
        exit(0)


    else:
        print('** DRAW **')

    print(f"Score: You {wins['player_one_score']},"
          f"CPU {wins['player_two_score']}")


# function to give response of what each player played
def play_response(player_choice, random_choice):
    reply = {'r':'Rock', 's':'Scissors', 'p':'Paper'}
    print("Player "+ reply.get(player_choice) + " :  CPU " + reply.get(random_choice))




# Function that ends the game
def quit_game():
    print("Game over!")
    print('Thanks for playing! Goodbye!')
    exit(0)


# Function that begins the game
def game():
    print("Game start!")
    print('Rock Paper Scissors, Go! \n')
    print('Press "R" for Rock \n'
            'Press "P" for Paper \n'
            'Press "S" for Scissors \n')


    # Infinite loop.
    while True:
        play_game()

if __name__ == '__main__':
    game()
