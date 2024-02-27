
variable "cloudflare_account_id" {
  description = "Cloudflare Account ID"
  sensitive   = true
  type        = string
}

variable "cloudflare_api_token" {
  description = "Cloudflare API Token"
  sensitive   = true
  type        = string
}

/* -------------------------------------------------------------------------- */
/*                              Cloudflare Setup                              */
/* -------------------------------------------------------------------------- */
provider "cloudflare" {
  api_token = var.cloudflare_api_token
}