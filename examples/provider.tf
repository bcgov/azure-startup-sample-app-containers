terraform {
  backend "azurerm" {
    resource_group_name  = "tfstate"
    storage_account_name = "tfstate6ldzd"
    container_name       = "tfstate"
    key                  = "az-container_app-terraform.tfstate"
  }

  required_version = ">=1.8.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">=3.111.0, < 4.0.0"
    }
  }
}

provider "azurerm" {
  use_oidc = true
  features {}
}
