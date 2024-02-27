terraform {
  cloud {
    organization = "uceumice"
    workspaces {
      name = "uceumice"
    }
  }
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~>4.0"
    }
  }
}
