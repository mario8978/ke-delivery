Feature: Cadastro e manutenção de promoções (inserir, remover, atualizar)
    As a restaurante
    I want to inserir, remover e atualizar as promoções do restaurante
    so that gerencio as promoções que disponibilizo aos clientes

    Scenario: Adição de promoção realizada com sucesso (serviço)
        Given o restaurante "Churras do Lucas" está armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "40TAO", a qual aplica "40%" de desconto
        When o restaurante "Churras do Lucas" adiciona a promoção "10BARRA10", a qual aplica "10%" de desconto
        Then o restaurante "Churras do Lucas" permanece armazenado no sistema
        And o sistema agora contém 2 promoções do "Churras do Lucas": "40TAO", a qual aplica "40%" de desconto, "10BARRA10", a qual aplica "10%" de desconto

    Scenario: Adição de promoção já existente (serviço)
        Given o restaurante "Churras do Lucas" está armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "QFOMEBB", a qual aplica "25%" de desconto
        When o restaurante "Churras do Lucas" adiciona a promoção "QFOMEBB", a qual aplica "20%" de desconto
        Then o restaurante "Churras do Lucas" permanece armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "QFOMEBB", a qual aplica "25%" de desconto

    Scenario: Remoção de promoção realizada com sucesso (serviço)
        Given o restaurante "Churras do Lucas" está armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "40TAO", a qual aplica "40%" de desconto
        When o restaurante "Churras do Lucas" remove a promoção "40TAO"
        Then o restaurante "Churras do Lucas" permanece armazenado no sistema
        And o sistema não contém nenhuma promoção do "Churras do Lucas"

    Scenario: Atualização de promoção realizada com sucesso (serviço)
        Given o restaurante "Churras do Lucas" está armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "QFOMEBB", a qual aplica "25%" de desconto
        When o restaurante "Churras do Lucas" define que a promoção "QFOMEBB" agora aplica "30%" de desconto
        Then o restaurante "Churras do Lucas" permanece armazenado no sistema
        And o sistema contém somente 1 promoção do "Churras do Lucas": "QFOMEBB", a qual aplica "30%" de desconto