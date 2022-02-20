Feature: Create Fruit

    Scenario: As a user, I want to be able to create a fruit on the homepage
        Given the user is at homepage
        When the user creates fruit with name: <fruitName>, color: <color> and amount: <amount>
        Then the user sees a success message
        And the user validates fruit with name: <fruitName>, color: <color> and amount: <amount> exists in list

        Examples:
            | fruitName | color     | amount    |
            | Naranja   | naranja   | 12        |
    
    # TODO: Implement
    # Scenario: As a user, I don't want to be able to create a fruit if it's duplicated
    #     Given the user is at <homepageUrl>
    #     And there exists no fruit with <fruitName>
    #     When I submit a new fruit
    #     Then I should see an error message saying "<fruitName> already exists"

    #     Examples:
    #         | fruitName | color     | amount    |
    #         | Naranja   | naranja   | 12        |
    #         | Maracuyá  | amarillo  | 3         |
    #         | Maracuya  | Amarillo  | 3         |