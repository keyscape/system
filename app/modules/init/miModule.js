module.exports = () => {
    let miContent = {
        alt: {//                                0       1                   2                       3                       4
            role:   {name: "Cargo",     opt: [  "CEO",  "Responsável TI",   "Gerente de Projetos",  "Gestão de Pessoas",    "Zelador"   ]}, // 0
            email:  {name: "E-mail",    opt: [  "jinx", "clean365",         "sandro_expo",          "silvisantos",          "silv_expo" ]}, // 1
            tel:    {name: "Telefone",  opt: [  "0391", "2554",             "4747",                 "7990",                 "6579"      ]}, // 2
            drink:  {name: "Bebida",    opt: [  "Água", "Café",             "Chá",                  "Refrigerante",         "Suco"      ]}  // 3
        },
    }
    miContent.res = {
        silvio: {name: "Silvio",    opt: [0, 4, 2, 1], role: miContent.alt.role.opt[0], email: miContent.alt.email.opt[4], tel: miContent.alt.tel.opt[2], drink: miContent.alt.drink.opt[1]},
        roger:  {name: "Roger",     opt: [4, 1, 1, 4], role: miContent.alt.role.opt[4], email: miContent.alt.email.opt[1], tel: miContent.alt.tel.opt[1], drink: miContent.alt.drink.opt[4]},
        julia:  {name: "Julia",     opt: [1, 0, 0, 2], role: miContent.alt.role.opt[1], email: miContent.alt.email.opt[0], tel: miContent.alt.tel.opt[0], drink: miContent.alt.drink.opt[2]},
        sandro: {name: "Sandro",    opt: [2, 2, 4, 3], role: miContent.alt.role.opt[2], email: miContent.alt.email.opt[2], tel: miContent.alt.tel.opt[4], drink: miContent.alt.drink.opt[3]},
        silvia: {name: "Silvia",    opt: [3, 3, 3, 0], role: miContent.alt.role.opt[3], email: miContent.alt.email.opt[3], tel: miContent.alt.tel.opt[3], drink: miContent.alt.drink.opt[0]}
    }
    
    /* 
        ## Resposta ##

        Silvio  - CEO                   - silv_expo     - 4747  - Café
        Roger   - Zelador               - clean365      - 2554  - Suco
        Julia   - Responsável TI        - jinx          - 0391  - Chá
        Sandro  - Gerente de Projetos   - sandro_expo   - 6579  - Refrigerante
        Silvia  - Gestão de Pessoas     - silvisantos   - 7990  - Água
    */

    return miContent

}