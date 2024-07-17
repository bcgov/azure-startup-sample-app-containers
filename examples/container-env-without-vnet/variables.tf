variable "location" {
  description = "(Required) Azure region to deploy to. Changing this forces a new resource to be created."
  type        = string

  validation {
    condition     = contains(["canadaeast", "canadacentral"], lower(var.location))
    error_message = "ERROR: Only Canadian Azure Regions are allowed! Valid values for the variable \"location\" are: \"canadaeast\",\"canadacentral\"."
  }
}

variable "service_name" {
  description = "The license plate naming convention used."
  type        = string
}

variable "env" {
  description = "(Required) Name of the envrionment i.e. dev, lab, qa, npe, prd...etc. Used in PostgreSQL Flex Server naming convention of \"maz{location_shortname}{env}{app_name}psqlflex{index}\". Changing this forces a new resource to be created."
  type        = string

  validation {
    condition     = contains(["dev", "lab", "qa", "npe", "staging", "prd", "prda", "prdb", "ss"], var.env)
    error_message = "ERROR: Valid values for the variable \"env\" are: \"dev\", \"lab\", \"qa\", \"npe\", \"staging\", \"prd\", \"prda\", \"prdb\", \"ss\"."
  }
}

variable "tags" {
  description = "(Required) BC-Gov Standard Azure Tags object."
  type = object({
    appclass       = string
    appid          = string
    appname        = string
    appowner       = string
    businessunit   = string
    canumber       = string
    compliance     = string
    costcenter     = string
    dataclass      = string
    env            = string
    otl            = string
    pii            = string
    sharedservices = string
    triageticket   = string
  })
  validation {
    condition     = contains(["notset", "vital", "critical", "important", "productivity"], var.tags["appclass"])
    error_message = "ERROR: Valid values for the tag \"appclass\" are: \"notset\", \"vital\", \"critical\", \"important\", \"productivity\"."
  }
  validation {
    condition     = can(regex("^[0-9]{4}$", var.tags["appid"])) || var.tags["appid"] == "notset"
    error_message = "ERROR: Valid values for the tag \"appid\" are \"notset\" or a combination of 4 digits that match the regex '^[0-9]{4}$' e.g.: 1059,0509"
  }
  validation {
    condition     = can(regex("^[a-zA-Z0-9-_]+$", var.tags["appname"])) || var.tags["appname"] == "notset"
    error_message = "ERROR: Valid values for the tag \"appname\" are \"notset\" or a combination of alphanumeric characters, hyphens/dashes and underscores only."
  }
  validation {
    condition     = can(regex("^([a-z0-9-._]+@rci.rogers.)(ca|com)$", var.tags["appowner"])) || var.tags["appowner"] == "notset"
    error_message = "ERROR: Valid value for the tag \"appowner\" must contain alphanumeric characters, hyphens/dashes and underscores only."
  }
  validation {
    condition     = can(regex("^[a-z]{2,3}$", var.tags["businessunit"])) || var.tags["businessunit"] == "notset"
    error_message = "ERROR: Valid values for the tag \"businessunit\" are \"notset\" or a combination of 2 or 3 alphabetic lowercase characters that match the regex '^[a-z]{2,3}$' e.g.: it, cex, cbu"
  }
  validation {
    condition     = can(regex("^2[0-9][a-z]{2}[0-9]{6}$", var.tags["canumber"])) || var.tags["canumber"] == "notset"
    error_message = "ERROR: Valid values for the tag \"canumber\" are \"notset\" or a series of characters that match the regex '^2[0-9][a-z]{2}[0-9]{6}$' e.g.: 21mb700467"
  }
  validation {
    condition     = contains(["notset", "none", "pci", "sox", "sox_and_pci"], var.tags["compliance"])
    error_message = "ERROR: Valid values for the tag \"compliance\" are: \"notset\", \"none\", \"pci\", \"sox\", \"sox_and_pci\"."
  }
  validation {
    condition     = can(regex("^[0-9]{3}[.][0-9]{4}[.][0-9]{4}$", var.tags["costcenter"])) || var.tags["costcenter"] == "notset"
    error_message = "ERROR: Valid values for the tag \"costcenter\" are \"notset\" or a series of digits that match the regex '^[0-9]{3}[.][0-9]{4}[.][0-9]{4}$' e.g.: 912.1101.6224, 651.2245.0254"
  }
  validation {
    condition     = contains(["notset", "confidential", "internal", "public", "restricted"], var.tags["dataclass"])
    error_message = "ERROR: Valid values for the tag \"dataclass\" are: \"notset\", \"confidential\", \"internal\", \"public\", \"restricted\"."
  }
  validation {
    condition     = contains(["notset", "dev", "lab", "qa", "npe", "staging", "prd", "prda", "prdb", "ss"], var.tags["env"])
    error_message = "ERROR: Valid values for the tag \"env\" are: \"notset\", \"dev\", \"lab\", \"qa\", \"npe\", \"staging\", \"prd\", \"prda\", \"prdb\", \"ss\"."
  }
  validation {
    condition     = can(regex("^[0-9]{6}$", var.tags["otl"])) || var.tags["otl"] == "notset"
    error_message = "ERROR: Valid values for the tag \"otl\" are \"notset\" or a combination of 6 digits that match the regex '^[0-9]{6}$' e.g.: 164729, 163150"
  }
  validation {
    condition     = contains(["notset", "false", "true"], var.tags["pii"])
    error_message = "ERROR: Valid values for the tag \"pii\" are: \"notset\", \"false\", \"true\"."
  }
  validation {
    condition     = contains(["notset", "yes", "no"], var.tags["sharedservices"])
    error_message = "ERROR: Valid values for the tag \"sharedservices\" are: \"notset\", \"yes\", \"no\"."
  }
  validation {
    condition     = can(regex("^[a-zA-Z]+[-][0-9]+$", var.tags["triageticket"])) || var.tags["triageticket"] == "notset"
    error_message = "ERROR: Valid values for the tag \"triageticket\" are \"notset\" or a combination of alphabetic characters and numbers separated by a hyphens which should match the regex '^[a-zA-Z]+[-][0-9]+$' e.g.: ceng-10204, cloudops-9891."
  }
}
