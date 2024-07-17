# Azure Startup Sample Application (Containers)

This sample application is a copy of the following Microsoft code:

- Backend: [Azure Container Apps Album API](https://github.com/Azure-Samples/containerapps-albumapi-csharp)
- Frontend: [Azure Container Apps Album Viewer UI](https://github.com/Azure-Samples/containerapps-albumui)

The build and deployment steps are taken from the following tutorials:

- [Deploy a backend microservice app](https://learn.microsoft.com/en-us/azure/container-apps/tutorial-code-to-cloud?tabs=bash%2Ccsharp&pivots=docker-local)
- [Deploy a frontend microservice app](https://learn.microsoft.com/en-us/azure/container-apps/communicate-between-microservices?tabs=bash&pivots=docker-local)

## Examples

### Container Environment without Virtual Network (VNET) Integration

This example deploys the following resources:

- Azure Container Registry (ACR)
- Azure Container Apps Environment (ACAE)

The [Deploy Application](https://github.com/bcgov/azure-startup-sample-app-containers/actions/workflows/deploy-app.yml) workflow, builds both a frontend and backend container image, pushes them to ACR, and deploys them to ACAE.

> Note: Both containers are accessible externally.

### Container Environment with Virtual Network (VNET) Integration

**EXAMPLE PENDING**

This example deploys the following resources:

- Azure Container Registry (ACR)
- Azure Container Apps Environment (ACAE)
- Azure Virtual Network (VNET)
  - NOTE: The deployment does not create a new VNET or Subnet, but is configured to utilized an existing VNET and Subnet.
