# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# Create a method that takes in array of mixed data
def oddNums array
    # Go through the array and select only the integers
    numArray = array.select { |value| value.is_a?(Integer) }
    # Go through the array of integers and select the ones that are odd
    oddNumArray = numArray.select { |value| value.odd? }
    # Sort the array of odd numbers in place using the bang operator
    oddNumArray.sort!
    # Implicity return the array of odd numbers, sorted from least to greatest
end

p oddNums fullArr1
p oddNums fullArr2


# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

# Create a method that takes in 2 arguments
# arg1 = array of words
# arg2 = letter to check for (string)
def containLetter(array, letter)
    # Iterate through the array of words
    # Use select to check if that letter is in the word
    selected_array = array.select { |value| value.include?(letter) }
    # Implicity return an array of words that contain that letter with the statement above
end

p containLetter(beverages_array, letter_o)
p containLetter(beverages_array, letter_a)


# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create method that takes in 1 argument that is a string
def noVowels string
    # # Create a string that contains all the vowels
    # vowels = 'aeiou'
    # # Split the string into an array
    # strArray = string.split('')
    # # Use 'select' to only keep the characters that are not vowels
    # consonantArray = strArray.select { |value| !vowels.include?(value.downcase) }
    # # Join the array into a string
    # consonantsOnly = consonantArray.join('')

    #Use the delete method that checks lowercase vowels and uppercase vowels
    string.delete "aeiouAEIOU"
    # Implicity return a string with all the vowels removed with the line above
end

p noVowels album1
p noVowels album2
p noVowels album3


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster increase_in_speed
        @current_speed = @current_speed + increase_in_speed
    end

    def brake decrease_in_speed
        @current_speed = @current_speed - decrease_in_speed
        if @current_speed < 0
            @current_speed = 0
        end
    end
end


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

# Create a new Bike object
my_bike = Bike.new "Trek"

# Increase the speed
my_bike.pedal_faster 10
# Get information of bike
p my_bike.get_info

# Increase the speed
my_bike.brake 15
# Get information of bike
p my_bike.get_info