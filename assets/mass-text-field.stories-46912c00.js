const q={component:"mass-text-field",title:"Components/mass-input-field"},t={inputId:"inputId",labelText:"Label",inputPlaceholderText:"Placeholder",inputType:"text",inputValue:"",isDisabled:!1,maxLength:50,labelPosition:"top"},e={args:{...t}},o={args:{...e.args,helpText:"This is help text"}},s={args:{...t,isDisabled:!0}},n={args:{...s.args,helpText:"This is help text"}},r={args:{...t,isValid:!1,errorText:"Error explanation text"}},c={args:{...r.args,helpText:"This is help text"}},a={args:{...t,isValid:!0,successText:"Success explanation text"}},i={args:{...a.args,helpText:"This is help text"}},l={args:{...t,labelPosition:"left"}};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,h,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helpText: 'This is help text'
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,T,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isDisabled: true
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,b,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Disabled.args,
    helpText: 'This is help text'
  }
}`,...(W=(b=n.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var D,A,M;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isValid: false,
    errorText: 'Error explanation text'
  }
}`,...(M=(A=r.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,H,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...WithErrorMessage.args,
    helpText: 'This is help text'
  }
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var P,V,O;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isValid: true,
    successText: 'Success explanation text'
  }
}`,...(O=(V=a.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var I,_,y;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...WithSuccessMessage.args,
    helpText: 'This is help text'
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var C,j,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    labelPosition: 'left'
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const v=["Default","DefaultWithHelpText","Disabled","DisabledWithHelpText","WithErrorMessage","WithErrorMessageAndHelpText","WithSuccessMessage","WithSuccessMessageAndHelpText","LabelOnTheLeft"];export{e as Default,o as DefaultWithHelpText,s as Disabled,n as DisabledWithHelpText,l as LabelOnTheLeft,r as WithErrorMessage,c as WithErrorMessageAndHelpText,a as WithSuccessMessage,i as WithSuccessMessageAndHelpText,v as __namedExportsOrder,q as default};
//# sourceMappingURL=mass-text-field.stories-46912c00.js.map
