const g={component:"mass-icon"},t={iconName:{control:{type:"select"},options:["warning","error","yard","search"]},iconStyle:{control:{type:"select"},options:["outlined","sharp","rounded"]},color:{control:{type:"select"},options:["neutral-00-white","neutral-10","neutral-20","neutral-60","neutral-70","neutral-80","neutral-90","neutral-100-black","neutral-transparent-black-10","neutral-transparent-black-20","primary-20","primary-30","primary-40","primary-50","primary-60","semantic-positive-01","semantic-positive-02","semantic-positive-03","semantic-negative-01","semantic-negative-02","semantic-negative-03","semantic-warning-01","semantic-warning-02","semantic-warning-03"]},weight:{control:{type:"select"},options:[100,400,700]},opticalSize:{control:{type:"select"},options:[16,24,32,48,64]},fill:{control:{type:"select"},options:[0,1]},grade:{control:{type:"select"},options:[-25,0,100]}},a={color:"neutral-100-black",iconName:"yard",iconAltText:"Excavation",isPresentational:!1,iconStyle:"rounded",opticalSize:16,weight:400,fill:0,grade:0},e={argTypes:t,args:{...a,iconStyle:"rounded"}},n={argTypes:t,args:{...a,iconStyle:"sharp"}},r={argTypes:t,args:{...a,iconStyle:"outlined"}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "rounded"
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var i,l,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "sharp"
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    iconStyle: "outlined"
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["RoundedIcon","SharpIcon","OutlinedIcon"];export{r as OutlinedIcon,e as RoundedIcon,n as SharpIcon,y as __namedExportsOrder,g as default};
//# sourceMappingURL=mass-icon.stories-f008aebb.js.map
