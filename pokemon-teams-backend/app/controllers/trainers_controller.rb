class TrainersController < ApplicationController

    def index
        trainers = Trainer.all 
        # render json: trainers, include: [:pokemons], except: [:created_at, :updated_at]
        render json: trainers.to_json(:include => {
            :pokemons => {:only => [:id, :nickname, :species, :trainer_id ]} 
        }, except: [:created_at, :updated_at] ) 
    end 


      def show
        trainer = Trainer.find_by(id: params[:id])
        render json: {id: trainer.id, name: trainer.name} 
      end

  

end

