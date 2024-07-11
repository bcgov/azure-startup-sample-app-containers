# infrastructure

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [azurerm_container_registry.acr](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/container_registry) | resource |
| [azurerm_resource_group.rg](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) | resource |
| [azurerm_client_config.current](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/client_config) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_container_registry_admin_enabled"></a> [container\_registry\_admin\_enabled](#input\_container\_registry\_admin\_enabled) | Enable admin user for the Azure Container Registry | `bool` | `false` | no |
| <a name="input_container_registry_public_network_access_enabled"></a> [container\_registry\_public\_network\_access\_enabled](#input\_container\_registry\_public\_network\_access\_enabled) | Enable public network access for the Azure Container Registry | `bool` | `true` | no |
| <a name="input_container_registry_quarantine_policy_enabled"></a> [container\_registry\_quarantine\_policy\_enabled](#input\_container\_registry\_quarantine\_policy\_enabled) | Enable quarantine policy for the Azure Container Registry | `bool` | `false` | no |
| <a name="input_container_registry_retention_policy"></a> [container\_registry\_retention\_policy](#input\_container\_registry\_retention\_policy) | The retention policy for the Azure Container Registry | <pre>object({<br>    days    = optional(number)<br>    enabled = optional(bool)<br>  })</pre> | `{}` | no |
| <a name="input_container_registry_sku"></a> [container\_registry\_sku](#input\_container\_registry\_sku) | The SKU of the Azure Container Registry | `string` | n/a | yes |
| <a name="input_container_registry_zone_redudancy_enabled"></a> [container\_registry\_zone\_redudancy\_enabled](#input\_container\_registry\_zone\_redudancy\_enabled) | Enable zone redundancy for the Azure Container Registry | `bool` | `false` | no |
| <a name="input_env"></a> [env](#input\_env) | (Required) Name of the envrionment i.e. dev, lab, qa, npe, prd...etc. Used in PostgreSQL Flex Server naming convention of "maz{location\_shortname}{env}{app\_name}psqlflex{index}". Changing this forces a new resource to be created. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | (Required) Azure region to deploy to. Changing this forces a new resource to be created. | `string` | n/a | yes |
| <a name="input_required_tags"></a> [required\_tags](#input\_required\_tags) | (Required) BC-Gov Standard Azure Tags object. | <pre>object({<br>    deployedBy = string<br>  })</pre> | <pre>{<br>  "deployedBy": "azure-lz-vending"<br>}</pre> | no |
| <a name="input_service_name"></a> [service\_name](#input\_service\_name) | The license plate naming convention used. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | (Required) BC-Gov Standard Azure Tags object. | <pre>object({<br>    appclass       = string<br>    appid          = string<br>    appname        = string<br>    appowner       = string<br>    businessunit   = string<br>    canumber       = string<br>    compliance     = string<br>    costcenter     = string<br>    dataclass      = string<br>    env            = string<br>    otl            = string<br>    pii            = string<br>    sharedservices = string<br>    triageticket   = string<br>  })</pre> | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_container_registry_id"></a> [container\_registry\_id](#output\_container\_registry\_id) | The ID of the Azure Container Registry |
| <a name="output_container_registry_login_server"></a> [container\_registry\_login\_server](#output\_container\_registry\_login\_server) | The Login Server of the Azure Container Registry |
| <a name="output_container_registry_name"></a> [container\_registry\_name](#output\_container\_registry\_name) | The Name of the Azure Container Registry |
| <a name="output_resource_group_id"></a> [resource\_group\_id](#output\_resource\_group\_id) | The ID of the Resource Group |
| <a name="output_resource_group_name"></a> [resource\_group\_name](#output\_resource\_group\_name) | The Name of the Resource Group |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
