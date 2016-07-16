class MapController < ApplicationController
  def index
    @google_maps_api_key = Rails.env == 'production' ? "?key=AIzaSyA-zKQWv_pg5KdWnH6F4uphnoBL1a9ZX7M" : ''
  end
end
