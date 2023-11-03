# mass-google-map



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type                              | Default                          |
| ------------- | --------- | ----------- | --------------------------------- | -------------------------------- |
| `center`      | --        |             | `{ lat: number; lng: number; }`   | `{ lat: -34.397, lng: 150.644 }` |
| `coordinates` | --        |             | `{ lat: number; lng: number; }[]` | `[]`                             |
| `legend`      | --        |             | `MassLegendItemType[]`            | `[]`                             |


## Dependencies

### Depends on

- [mass-legend](../mass-legend)

### Graph
```mermaid
graph TD;
  mass-google-map --> mass-legend
  mass-legend --> mass-icon
  style mass-google-map fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
