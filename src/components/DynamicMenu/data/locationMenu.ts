import { LocationProps, MenuSetter } from "@/types";

export function createLocationMenu(setMenu: MenuSetter) {
  const menu: LocationProps[] = [
    // Location Menus
    {
      name: "Cidade",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorando a cidade..."),
          text: "Explorando a cidade...",
        },
        {
          label: "Loja de Armas",
          action: () => setMenu(menu[5].menu, menu[5].name),
          text: "",
        },
        {
          label: "Loja de Armaduras",
          action: () => setMenu(menu[6].menu, menu[6].name),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Vila",
      menu: [
        {
          label: "Explorar / Vila",
          action: () => console.log("Explorar"),
          text: "",
        },
        {
          label: "Loja de Poções",
          action: () => setMenu(menu[7].menu, menu[7].name),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Floresta",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar / Floresta"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Dungeon",
      menu: [
        {
          label: "Explorar",
          action: () => console.log("Explorar / Dungeon"),
          text: "",
        },
        {
          label: "Caçar",
          action: () => console.log("Caçar"),
          text: "",
        },
        {
          label: "Viajar",
          action: () => setMenu(menu[4].menu, menu[4].name),
          text: "",
        },
      ],
    },
    {
      name: "Viajar",
      menu: [
        {
          label: "Cidade",
          action: () => setMenu(menu[0].menu, menu[0].name),
          text: "",
        },
        {
          label: "Vila",
          action: () => setMenu(menu[1].menu, menu[1].name),
          text: "",
        },
        {
          label: "Floresta",
          action: () => setMenu(menu[2].menu, menu[2].name),
          text: "",
        },
        {
          label: "Dungeon",
          action: () => setMenu(menu[3].menu, menu[3].name),
          text: "",
        },
      ],
    },
    // Shop Menus
    {
      name: "Loja de Armas",
      menu: [
        {
          label: "Espada de Madeira",
          action: () => console.log("Espada de Madeira"),
          text: "",
        },
        {
          label: "Espada de Ferro",
          action: () => console.log("Espada de Ferro"),
          text: "",
        },
        {
          label: "Espada de Cristal",
          action: () => console.log("Espada de Cristal"),
          text: "",
        },
        {
          label: "Espada Última",
          action: () => console.log("Espada Última"),
          text: "",
        },
        {
          label: "Voltar",
          action: () => setMenu(menu[0].menu, menu[0].name),
          text: "",
        },
      ],
    },
    {
      name: "Loja de Armaduras",
      menu: [
        {
          label: "Armadura de Couro",
          action: () => console.log("Armadura de Couro"),
          text: "",
        },
        {
          label: "Armadura de Mithril",
          action: () => console.log("Armadura de Mithril"),
          text: "",
        },
        {
          label: "Armadura de Ferro",
          action: () => console.log("Armadura de Ferro"),
          text: "",
        },
        {
          label: "Armadura Última",
          action: () => console.log("Armadura Última"),
          text: "",
        },
        {
          label: "Voltar",
          action: () => setMenu(menu[0].menu, menu[0].name),
          text: "",
        },
      ],
    },
    {
      name: "Loja de Poções",
      menu: [
        {
          label: "Poção de HP",
          action: () => console.log("Poção de HP"),
          text: "",
        },
        {
          label: "Poção de MP",
          action: () => console.log("Poção de MP"),
          text: "",
        },
        {
          label: "Poção Última",
          action: () => console.log("Poção Última"),
          text: "",
        },
        {
          label: "Voltar",
          action: () => setMenu(menu[1].menu, menu[1].name),
          text: "",
        },
      ],
    },
  ];

  return menu;
}
