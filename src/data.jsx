import React, { useState } from "react";

export const ProductsData = {
  MEN: [
    {
      PANTS: [
        {
          NAME: "WORKOUT PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ce418c837384f4eb076fa9620b92b9f_9366/Designed_for_Training_Workout_Pants_Grey_IS3793_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/92bbcb576aae44b184e582591b716475_9366/Designed_for_Training_Workout_Pants_Green_IS3794_21_model.jpg",
          ],
          COLORS: ["Legend Ivy", "Silver Pebble"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 65,
          id: 1,
        },
        {
          NAME: "BIG LOGO PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fc42e6506a5466aa38dafc40076ec44_9366/Essentials_Fleece_Tapered_Cuff_Big_Logo_Pants_Black_IB4025_21_model.jpg",
          ],
          COLORS: ["Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 50,
          id: 2,
        },
        {
          NAME: "TRAINING PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b328ea7d185a41b581f1361103396101_9366/Tiro_24_Training_Pants_Blue_IR9343_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98ed9fd6b4644c27bef5d8a9a00c8612_9366/Tiro_24_Training_Pants_White_IV7268_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98e90ef91aff468b91d363d2366c7279_9366/Tiro_24_Training_Pants_Black_IV7269_21_model.jpg",
          ],
          COLORS: ["Blue", "White", "Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 50,
          id: 3,
        },
        {
          NAME: "STRIPES OPEN HEM FLEECE PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c88afe9c3bf4b4297b3ec3cd8c6a98a_9366/Essentials_3-Stripes_Open_Hem_Fleece_Pants_Grey_IJ8888_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a1bc95370f14afcbaa8acc52e530e81_9366/Essentials_3-Stripes_Open_Hem_Fleece_Pants_Grey_IJ8887_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/967532722b42403383e7b7a347623733_9366/Essentials_3-Stripes_Open_Hem_Fleece_Pants_Black_IB4039_21_model.jpg",
          ],
          COLORS: ["Dark Grey Heather", "Medium Grey Heather", "Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 50,
          id: 4,
        },
        {
          NAME: "LEAGUE PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0357f54369424e5ab2d5aef300cbcd50_9366/Tiro_23_League_Pants_Black_HS3530_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bf9cb1cf4d5541e984e9aefa00b6e59d_9366/Tiro_23_League_Pants_Black_HS7232_21_model.jpg",
          ],
          COLORS: ["Black / Black", "Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 70,
          id: 5,
        },
      ],
    },
    {
      "T-SHIRTS": [
        {
          NAME: "ADICOLOR TREFOIL TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4cdaf847d544a7987f16b609a102211_9366/Adicolor_Trefoil_Tee_Red_IR8009_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8d3070faa8d4a5ca8f96edc54ae3983_9366/Adicolor_Trefoil_Tee_Blue_IR8010_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/696248fbcc944d658cf19a35cbd2126b_9366/Adicolor_Trefoil_Tee_White_IV5353_21_model.jpg",
          ],
          COLORS: ["Red", "Blue", "White"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 30,
          id: 6,
        },
        {
          NAME: "TRAINING WORKOUT TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/440277e4f4b2414488fac489f43dc9f2_9366/Designed_for_Training_Workout_Tee_Green_IS3817_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7d0aa56d8dc41a2afd14c175ccad8bf_9366/Designed_for_Training_Workout_Tee_Grey_IS3809_21_model.jpg",
          ],
          COLORS: ["Dgh Solid Grey", "Silver Pebble"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 35,
          id: 7,
        },
        {
          NAME: "ARCHIVE TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18d9436109af47d8bb2fcb339f6cf4b4_9366/Archive_Tee_White_IU0198_21_model.jpg",
          ],
          COLORS: ["White"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 40,
          id: 8,
        },
        {
          NAME: "PRINTED POLO SHIRT",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/023d851548a04e72b4c7718dccec3bb6_9366/Ultimate365_Printed_Polo_Shirt_Blue_IS8869_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44ec0cd28c5d46de8ef1d05ba91428a6_9366/Ultimate365_Printed_Polo_Shirt_White_IS8868_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f9eb15bada24abab565ef05e3d2caad_9366/Ultimate365_Printed_Polo_Shirt_Grey_IU4404_21_model.jpg",
          ],
          COLORS: [
            "Collegiate Navy / White",
            "Grey Six / Black",
            "White / Grey Two",
          ],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 70,
          id: 9,
        },
        {
          NAME: "PINK TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/155fd6f8a0ca4f6ca1d44942c6c701ec_9366/PINK_TEE_Pink_JC7590_21_model.jpg",
          ],
          COLORS: ["Pink"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 30,
          id: 10,
        },
      ],
    },
    {
      SHOES: [
        {
          NAME: "SUPERNOVA RISE SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f1375f34b2641d2bcca2ebdac8c9a77_9366/Supernova_Rise_Shoes_White_IF3015_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a60dd09c810e4ec19d592b249c670695_9366/Supernova_Rise_Shoes_Blue_IF9837_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ab3023bcda747f7aed40b14c2012dc0_9366/Supernova_Rise_Shoes_Red_IG5841_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66e5cd034ca845b1bfd6994472084bd4_9366/Supernova_Rise_Shoes_Black_IG5844_HM1.jpg",
          ],
          COLORS: [
            "Cloud White / Wonder Blue / Green Spark",
            "Preloved Ink / Iron Metallic / Spark",
            "Better Scarlet / Core Black / Green Spark",
            "Core Black / Core White / Carbon",
          ],
          SIZES: [9.5, 10, 10.5, 11, 11.5],
          PRICE: 140,
          id: 11,
        },
        {
          NAME: "ADIZERO ADIOS 8 RUNNING SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c97cd649f74547bb8d6a3fa6dbd76021_9366/Adizero_Adios_8_Running_Shoes_Grey_ID6902_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/39d812991f374813a1bfe3f28c4cfa9a_9366/Adizero_Adios_8_Running_Shoes_Green_IG5645_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/452c76e2c5794e55a44d999eb75a4c1c_9366/Adizero_Adios_8_Running_Shoes_Orange_IG5646_HM3_hover.jpg",
          ],
          COLORS: [
            "Carbon / Cloud White",
            "Crystal Jade / Aurora",
            "Spark / Core Black / Ivory",
          ],
          SIZES: [9.5, 10, 10.5, 11, 11.5],
          PRICE: 130,
          id: 12,
        },
        {
          NAME: "ULTRABOOST LIGHT C.RDY",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f1778079c71849908d1e3d5a39d7fceb_9366/ULTRABOOST_LIGHT_C.RDY_Beige_IE1674_HM1.jpg",
          ],
          COLORS: ["Wonder Beige / Silver Metallic / Flash Orange"],
          SIZES: [9.5, 10, 10.5, 11, 11.5],
          PRICE: 140,
          id: 13,
        },
        {
          NAME: "4DFWD 3 RUNNING SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c26da6f9b71949e78be4c0388d894477_9366/4DFWD_3_Running_Shoes_Beige_ID3489_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed979f9b170049dea7f3511377b54c0c_9366/4DFWD_3_Running_Shoes_Black_IG8985_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2711a2657d164ecd86f557693665f6d6_9366/4DFWD_3_Running_Shoes_White_IG8987_01_standard.jpg",
          ],
          COLORS: [
            "Putty Grey / Core Black / Silver Pebble",
            "Core Black / Core Black / Carbon",
            "Cloud White / Cloud White / Core White",
          ],
          SIZES: [9.5, 10, 10.5, 11, 11.5],
          PRICE: 200,
          id: 14,
        },
        {
          NAME: "ULTRABOOST LIGHT RUNNING SHOES NEW YORK TOGETHER",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9424a919d1e7477f9d33248248f0330d_9366/Ultraboost_Light_Running_Shoes_New_York_Together_Pink_IG7953_HM1.jpg",
          ],
          COLORS: ["Pink Strata / Shadow Red / Wonder Blue"],
          SIZES: [9.5, 10, 10.5, 11, 11.5],
          PRICE: 190,
          id: 15,
        },
      ],
    },
  ],
  WOMEN: [
    {
      PANTS: [
        {
          NAME: "3-STRIPES LEGGINGS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6019f5f00dd9422480f6f124dbc83831_9366/3-Stripes_Leggings_Black_IP2968_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aab282e729384b57834dc440435216f5_9366/3-Stripes_Leggings_Red_IP2972_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c812832d339142fca78bfdfcce829892_9366/Adicolor_3-Stripes_Leggings_Purple_IP2971_21_model.jpg",
          ],
          COLORS: ["Black", "Red", "Energy Ink"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 40,
          id: 16,
        },
        {
          NAME: "ADICOLOR CARGO PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/20faaeb605f84997b09812ce1fb805bf_9366/Adicolor_Cargo_Pants_Green_IZ0716_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9692b7faaf2d451bb0510a3a5403ef98_9366/Adicolor_Cargo_Pants_Beige_IZ0717_21_model.jpg",
          ],
          COLORS: ["Trace Green", "Magic Beige"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 80,
          id: 17,
        },
        {
          NAME: "CITY ESCAPE CARGO PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/280d5f6ac80944b68f1b6f11c3a3ccd8_9366/City_Escape_Cargo_Pants_Grey_IS3018_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/079cf06d161f4ea69ae8465fd0ef4b9a_9366/City_Escape_Cargo_Pants_Green_IT1451_21_model.jpg",
          ],
          COLORS: ["Legend Ivy", "Blanch Cargo"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 85,
          id: 18,
        },
        {
          NAME: "ADIDAS X FARM TIRO TRACK PANTS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ce4191450454fd1b0eb9187bf7ee8c1_9366/adidas_x_FARM_Tiro_Track_Pants_Red_IQ4492_21_model.jpg",
          ],
          COLORS: ["Bright Red / Signal Cyan"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 65,
          id: 19,
        },
        {
          NAME: "ESSENTIALS 3-STRIPES ANIMAL PRINT LEGGINGS",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b304dd99a9dc4db2b058e4321e6e16af_9366/Essentials_3-Stripes_Animal_Print_Leggings_Grey_IN9933_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26b37255d02d4fb1af3a9b488e9c6614_9366/Essentials_3-Stripes_Animal_Print_Leggings_Beige_IS2149_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef562b15e6f74bb5bd5df1bc5dfdc167_9366/Essentials_3-Stripes_Animal_Print_Leggings_White_IS2150_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ef3767d469c4c408b3331ba65703a3b_9366/Essentials_3-Stripes_Animal_Print_Leggings_White_IS2151_21_model.jpg",
          ],
          COLORS: [
            "Grey / Carbon / Black",
            "Magic Beige / Mesa / Shadow Brown",
            "Crystal White / Pulse Lime / Semi Lucid Blue",
            "Off White / Pulse Magenta / Bold Pink",
          ],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 45,
          id: 20,
        },
      ],
    },
    {
      "T-SHIRTS": [
        {
          NAME: "ESSENTIALS RIB TANK TOP",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/59f4c96b4e8e4a3aa614e9a695c6168c_9366/Essentials_Rib_Tank_Top_Black_IJ8251_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/67ad01f4582e4726a86dd6ec5a71d20d_9366/Essentials_Rib_Tank_Top_White_IJ8257_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0eabf2123d46431096098bcbf819f027_9366/Essentials_Rib_Tank_Top_Grey_IJ8261_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c0dccf5069540fa87f21ad013f294c0_9366/Essentials_Rib_Tank_Top_Orange_IR5917_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ccf5e3a4d654367baa07aede2087b3c_9366/Essentials_Rib_Tank_Top_Brown_IR5931_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc9565df65414b40a509f531cf32ed6f_9366/Essentials_Rib_Tank_Top_Green_IR5932_21_model.jpg",
          ],
          COLORS: [
            "Black",
            "Wonder White",
            "Medium Grey Heather",
            "Hazy Orange",
            "Earth Strata",
            "Semi Green Spark",
          ],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 35,
          id: 21,
        },
        {
          NAME: "HILO JERSEY",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2aac6377871841a9ba58ae8b00ea9650_9366/HILO_Jersey_Red_HK9067_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/204776518be5411796c6ae8b00eaeb12_9366/HILO_Jersey_Black_HK9068_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e37f7709bb28445b8338ae8c0054517f_9366/HILO_Jersey_White_HR3047_21_model.jpg",
          ],
          COLORS: [
            "Team Power Red 2 / White",
            "Black / White",
            "White / Team Light Grey",
          ],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 28,
          id: 22,
        },
        {
          NAME: "NY GRAPHIC SHORT SLEEVE TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/21e6319043f54dae94aa0603e631d29c_9366/NY_Graphic_Short_Sleeve_Tee_Black_IS3297_21_model.jpg",
          ],
          COLORS: ["Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 30,
          id: 23,
        },
        {
          NAME: "ANIMAL PRINT GRAPHIC TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bd6db7c9df654d81b7fdb196e6729522_9366/Animal_Print_Graphic_Tee_Black_IT1425_21_model.jpg",
          ],
          COLORS: ["Black"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 30,
          id: 24,
        },
        {
          NAME: "ADICOLOR 3-STRIPES TEE",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbcc4abc54d142e18f093456ec88de2f_9366/3-Stripes_Tee_White_IR8051_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33150ea075a4498b9d974257a07e71f9_9366/3-Stripes_Tee_Black_IU2420_21_model.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/732abee6eefd4bb6822e001e06f2d0f3_9366/Adicolor_3-Stripes_Tee_Red_IR8050_21_model.jpg",
          ],
          COLORS: ["White", "Black", "Better Scarlet"],
          SIZES: ["XS", "S", "M", "L", "XL"],
          PRICE: 35,
          id: 25,
        },
      ],
    },
    {
      SHOES: [
        {
          NAME: "SUPERNOVA STRIDE SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e5e947fe25b4c49a1d64e6f86321bf0_9366/Supernova_Stride_Shoes_Pink_IE4624_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3abcd30462584b0e9082051eafb793ba_9366/Supernova_Stride_Shoes_Purple_IG8291_HM1.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/649dddae84154e869f77b6c3775f3f0e_9366/Supernova_Stride_Shoes_White_IG8293_HM1.jpg",
          ],
          COLORS: [
            "Putty Mauve / Zero Metalic / Spark",
            "Preloved Fig / Putty Mauve / Silver Dawn",
            "Cloud White / Zero Metalic / Crystal White",
          ],
          SIZES: [6.5, 7, 7.5, 8, 8.5],
          PRICE: 110,
          id: 26,
        },
        {
          NAME: "ULTRABOOST LIGHT GORE-TEX RUNNING SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ae2496b3059487893e622b341889c8e_9366/Ultraboost_Light_GORE-TEX_Running_Shoes_Black_HP6403_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3078b2eaac9e48d58a72efc86be4ba5f_9366/Ultraboost_Light_GORE-TEX_Running_Shoes_White_IE1781_HM1.jpg",
          ],
          COLORS: [
            "Core Black / Core Black / Lucid Pink",
            "Chalk White / Core Black / Preloved Yellow",
          ],
          SIZES: [6.5, 7, 7.5, 8, 8.5],
          PRICE: 154,
          id: 27,
        },
        {
          NAME: "PUREBOOST 23 SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea4fa78f5442489cbfea0bfe1f1c99c2_9366/Pureboost_23_Running_Shoes_Purple_IF1538_01_standard.jpg",
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/74beadcfec274be187bd4ef88a7e065b_9366/Pureboost_23_Shoes_White_IF1558_01_standard.jpg",
          ],
          COLORS: [
            "Preloved Fig / Aurora Met. / Silver Dawn",
            "Core White / Gold Metallic / Shadow Brown",
          ],
          SIZES: [6.5, 7, 7.5, 8, 8.5],
          PRICE: 140,
          id: 28,
        },
        {
          NAME: "ULTRABOOST LIGHT RUNNING SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6568017cde94ba8b29d56518c5b3047_9366/Ultraboost_Light_Running_Shoes_Purple_IF1487_HM1.jpg",
          ],
          COLORS: ["Aurora Black / Preloved Fig / Grey Four"],
          SIZES: [6.5, 7, 7.5, 8, 8.5],
          PRICE: 133,
          id: 29,
        },
        {
          NAME: "EQ21 RUN RUNNING SHOES",
          IMAGES: [
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3589e72c786c4c4babfdaee000ee125f_9366/EQ21_Run_Running_Shoes_Blue_GY2209_01_standard.jpg",
          ],
          COLORS: ["Wonder Steel / Pulse Blue / Matt Purple Met"],
          SIZES: [6.5, 7, 7.5, 8, 8.5],
          PRICE: 64,
          id: 30,
        },
      ],
    },
  ],
};
