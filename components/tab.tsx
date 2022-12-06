export {};

// <div class="section one">
//      <div class="tabTitle">Resume</div>
//      <div class="tabSection">
// </div>


/* properties and transition effect to section  */
// .section{
//     display: flex;
//     flex-direction: row;
//     flex: 0.2; /* also attends to min flex*/
//     position: relative;
//     transition: all 0.7s ease-out;
// }

// /* section with active class will grow flex to 3 times  */
// .section.active{
//     flex: 3;
//     width: inherit;
//     opacity: 1;
// }

// /* diagonal lines on hover over tab */
// .section:not(.active):hover{
//   background: repeating-linear-gradient(
//     -45deg,
//     /* thin, start */
//     var(--title-color),
//     var(--title-color) 2px,
//     var(--bg-color) 2px,
//     /* thick */
//     var(--bg-color) 10px
//     );
// }

// .tabSection{
//   display: flex;
//   flex-direction: column;
//   /* background: violet; */
//   margin: 0 auto;
//   font-family: 'Sprat';
//   font-variation-settings: "wdth" 122, "wght" 40;
//   overflow: auto;
//   /* TODO attened to transition */
// }

// .section:not(.active)>.tabSection{
//   /* hide section inner tab when section isn't active */
//   /* display: none; */
//   width: 0;
//   opacity: 0;
// }

// .tabTitle{
//     font-family: 'Lincoln';
//     writing-mode: vertical-lr;
//     font-size: 6vh;
//     /* prevent line break in title */
//     white-space: nowrap;
//     overflow: hidden;
//   }
